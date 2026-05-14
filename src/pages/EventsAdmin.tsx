import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useEventStore } from "@/lib/eventStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Lock, CalendarDays } from "lucide-react";
import type { EmbassyEvent } from "@/lib/events";

const ADMIN_ACCESS_CODE = "EMBASSY2025";

const defaultFormState = {
  title: "",
  summary: "",
  content: "",
  category: "",
  venue: "",
  image: "",
  time: "",
  date: new Date().toISOString().slice(0, 10),
  ctaLabel: "Request details",
  featured: false,
};

const EventsAdmin = () => {
  const { toast } = useToast();
  const { events, addEvent, updateEvent, deleteEvent } = useEventStore();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<EmbassyEvent | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [codeError, setCodeError] = useState(false);
  const [formData, setFormData] = useState(defaultFormState);

  const resetForm = () => {
    setFormData(defaultFormState);
    setEditingItem(null);
  };

  const handleCodeSubmit = () => {
    if (accessCode === ADMIN_ACCESS_CODE) {
      setIsAuthenticated(true);
      setCodeError(false);
      toast({ title: "Access granted" });
    } else {
      setCodeError(true);
      toast({ title: "Invalid access code", variant: "destructive" });
    }
  };

  const handleAdd = () => {
    if (!formData.title || !formData.summary || !formData.date || !formData.time || !formData.venue) return;
    addEvent({
      title: formData.title,
      summary: formData.summary,
      content: formData.content || formData.summary,
      category: formData.category || "Event",
      venue: formData.venue,
      image: formData.image || undefined,
      time: formData.time,
      date: formData.date,
      ctaLabel: formData.ctaLabel || "Request details",
      featured: formData.featured,
    });
    toast({ title: "Event added" });
    resetForm();
    setIsAddOpen(false);
  };

  const handleEdit = () => {
    if (!editingItem || !formData.title || !formData.summary || !formData.date || !formData.time || !formData.venue) return;
    updateEvent(editingItem.id, {
      title: formData.title,
      summary: formData.summary,
      content: formData.content || formData.summary,
      category: formData.category || "Event",
      venue: formData.venue,
      image: formData.image || undefined,
      time: formData.time,
      date: formData.date,
      ctaLabel: formData.ctaLabel || "Request details",
      featured: formData.featured,
    });
    toast({ title: "Event updated" });
    resetForm();
  };

  const openEditDialog = (item: EmbassyEvent) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      summary: item.summary,
      content: item.content || "",
      category: item.category,
      venue: item.venue,
      image: item.image || "",
      time: item.time,
      date: item.date,
      ctaLabel: item.ctaLabel,
      featured: Boolean(item.featured),
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="py-24">
            <div className="container mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-md mx-auto">
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"><Lock className="w-8 h-8 text-primary" /></div>
                    <CardTitle className="font-serif text-2xl">Events staff access</CardTitle>
                    <p className="text-muted-foreground text-sm mt-2">Enter the staff code to manage embassy events.</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Access code</Label>
                      <Input
                        type="password"
                        value={accessCode}
                        onChange={(e) => {
                          setAccessCode(e.target.value);
                          setCodeError(false);
                        }}
                        placeholder="••••••••"
                        className={codeError ? "border-destructive" : ""}
                        onKeyDown={(e) => e.key === "Enter" && handleCodeSubmit()}
                      />
                    </div>
                    <Button onClick={handleCodeSubmit} className="w-full">Unlock</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-3xl mx-auto text-center mb-12">
              <div className="gold-accent h-1 w-16 mx-auto mb-6 rounded-full" />
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Manage events</h1>
              <p className="text-muted-foreground mt-3">Create, update, and remove upcoming events shown on the public site.</p>
            </motion.div>

            <div className="max-w-4xl mx-auto mb-8">
              <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2" onClick={resetForm}><Plus className="h-4 w-4" />Add event</Button>
                </DialogTrigger>
                <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader><DialogTitle>Add event</DialogTitle></DialogHeader>
                  <div className="space-y-4">
                    <div><Label>Title</Label><Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} /></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div><Label>Date</Label><Input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} /></div>
                      <div><Label>Time</Label><Input value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} placeholder="18:00 - 21:00" /></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div><Label>Category</Label><Input value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} placeholder="Culture, Trade, Community..." /></div>
                      <div><Label>CTA label</Label><Input value={formData.ctaLabel} onChange={(e) => setFormData({ ...formData, ctaLabel: e.target.value })} /></div>
                    </div>
                    <div><Label>Venue</Label><Input value={formData.venue} onChange={(e) => setFormData({ ...formData, venue: e.target.value })} /></div>
                    <div><Label>Summary</Label><Textarea value={formData.summary} onChange={(e) => setFormData({ ...formData, summary: e.target.value })} rows={3} /></div>
                    <div><Label>Full content</Label><Textarea value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} rows={5} /></div>
                    <div><Label>Image URL</Label><Input value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} placeholder="https://..." /></div>
                    <label className="flex items-center gap-3 text-sm text-foreground"><Checkbox checked={formData.featured} onCheckedChange={(checked) => setFormData({ ...formData, featured: checked === true })} />Feature this event on top</label>
                    <div className="flex gap-2 justify-end"><Button variant="outline" onClick={() => setIsAddOpen(false)}>Cancel</Button><Button onClick={handleAdd}>Save</Button></div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {events.map((item) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                  <Card>
                    {item.image && <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded-t-lg" />}
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center justify-between gap-3"><span>{item.title}</span>{item.featured && <span className="text-xs px-2 py-1 rounded-full bg-gold/20 text-foreground">Featured</span>}</CardTitle>
                      <p className="text-xs text-muted-foreground flex items-center gap-2"><CalendarDays className="w-3 h-3" />{item.date} • {item.time} • {item.category}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{item.summary}</p>
                      <div className="flex gap-2">
                        <Dialog open={editingItem?.id === item.id} onOpenChange={(open) => !open && resetForm()}>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="gap-1" onClick={() => openEditDialog(item)}><Pencil className="h-3 w-3" />Edit</Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader><DialogTitle>Edit event</DialogTitle></DialogHeader>
                            <div className="space-y-4">
                              <div><Label>Title</Label><Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} /></div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div><Label>Date</Label><Input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} /></div>
                                <div><Label>Time</Label><Input value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} /></div>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div><Label>Category</Label><Input value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} /></div>
                                <div><Label>CTA label</Label><Input value={formData.ctaLabel} onChange={(e) => setFormData({ ...formData, ctaLabel: e.target.value })} /></div>
                              </div>
                              <div><Label>Venue</Label><Input value={formData.venue} onChange={(e) => setFormData({ ...formData, venue: e.target.value })} /></div>
                              <div><Label>Summary</Label><Textarea value={formData.summary} onChange={(e) => setFormData({ ...formData, summary: e.target.value })} rows={3} /></div>
                              <div><Label>Full content</Label><Textarea value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} rows={5} /></div>
                              <div><Label>Image URL</Label><Input value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} /></div>
                              <label className="flex items-center gap-3 text-sm text-foreground"><Checkbox checked={formData.featured} onCheckedChange={(checked) => setFormData({ ...formData, featured: checked === true })} />Feature this event on top</label>
                              <div className="flex gap-2 justify-end"><Button variant="outline" onClick={resetForm}>Cancel</Button><Button onClick={handleEdit}>Save</Button></div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <AlertDialog>
                          <AlertDialogTrigger asChild><Button variant="destructive" size="sm" className="gap-1"><Trash2 className="h-3 w-3" />Delete</Button></AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete event</AlertDialogTitle>
                              <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => { deleteEvent(item.id); toast({ title: "Event deleted" }); }}>Delete</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsAdmin;