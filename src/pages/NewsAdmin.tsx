import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useNewsStore } from "@/lib/newsStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/useLanguage";
import { Plus, Pencil, Trash2 } from "lucide-react";
import type { NewsItem } from "@/lib/news";

const NewsAdmin = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const { newsItems, addNews, updateNews, deleteNews } = useNewsStore();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    image: "",
    date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
  });

  const resetForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      image: "",
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    });
    setEditingItem(null);
  };

  const handleAdd = () => {
    if (!formData.title || !formData.excerpt) return;
    addNews({
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content || formData.excerpt,
      category: formData.category || "Announcement",
      image: formData.image || undefined,
      date: formData.date
    });
    toast({ title: t("newsCms.articleAdded") });
    resetForm();
    setIsAddOpen(false);
  };

  const handleEdit = () => {
    if (!editingItem || !formData.title || !formData.excerpt) return;
    updateNews(editingItem.id, {
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content || formData.excerpt,
      category: formData.category || "Announcement",
      image: formData.image || undefined,
      date: formData.date
    });
    toast({ title: t("newsCms.articleUpdated") });
    resetForm();
  };

  const handleDelete = (id: string) => {
    deleteNews(id);
    toast({ title: t("newsCms.articleDeleted") });
  };

  const openEditDialog = (item: NewsItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      excerpt: item.excerpt,
      content: item.content || "",
      category: item.category,
      image: item.image || "",
      date: item.date
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-3xl mx-auto text-center mb-12">
              <div className="gold-accent h-1 w-16 mx-auto mb-6 rounded-full" />
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{t("newsCms.manageNews")}</h1>
            </motion.div>

            <div className="max-w-4xl mx-auto mb-8">
              <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2" onClick={resetForm}>
                    <Plus className="h-4 w-4" />
                    {t("newsCms.addArticle")}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle>{t("newsCms.addArticle")}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label>{t("newsCms.title")}</Label>
                      <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                    </div>
                    <div>
                      <Label>{t("newsCms.category")}</Label>
                      <Input value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} placeholder="Announcement, Trade, Culture, Visa..." />
                    </div>
                    <div>
                      <Label>{t("newsCms.excerpt")}</Label>
                      <Textarea value={formData.excerpt} onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })} rows={2} />
                    </div>
                    <div>
                      <Label>{t("newsCms.content")}</Label>
                      <Textarea value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} rows={4} />
                    </div>
                    <div>
                      <Label>{t("newsCms.imageUrl")}</Label>
                      <Input value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} placeholder="https://..." />
                    </div>
                    <div className="flex gap-2 justify-end">
                      <Button variant="outline" onClick={() => setIsAddOpen(false)}>{t("newsCms.cancel")}</Button>
                      <Button onClick={handleAdd}>{t("newsCms.save")}</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {newsItems.map((item) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                  <Card>
                    {item.image && (
                      <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded-t-lg" />
                    )}
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{item.title}</CardTitle>
                      <p className="text-xs text-muted-foreground">{item.date} • {item.category}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.excerpt}</p>
                      <div className="flex gap-2">
                        <Dialog open={editingItem?.id === item.id} onOpenChange={(open) => !open && resetForm()}>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="gap-1" onClick={() => openEditDialog(item)}>
                              <Pencil className="h-3 w-3" />
                              {t("newsCms.editArticle")}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-lg">
                            <DialogHeader>
                              <DialogTitle>{t("newsCms.editArticle")}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label>{t("newsCms.title")}</Label>
                                <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                              </div>
                              <div>
                                <Label>{t("newsCms.category")}</Label>
                                <Input value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                              </div>
                              <div>
                                <Label>{t("newsCms.excerpt")}</Label>
                                <Textarea value={formData.excerpt} onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })} rows={2} />
                              </div>
                              <div>
                                <Label>{t("newsCms.content")}</Label>
                                <Textarea value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} rows={4} />
                              </div>
                              <div>
                                <Label>{t("newsCms.imageUrl")}</Label>
                                <Input value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
                              </div>
                              <div className="flex gap-2 justify-end">
                                <Button variant="outline" onClick={resetForm}>{t("newsCms.cancel")}</Button>
                                <Button onClick={handleEdit}>{t("newsCms.save")}</Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive" size="sm" className="gap-1">
                              <Trash2 className="h-3 w-3" />
                              {t("newsCms.deleteArticle")}
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>{t("newsCms.deleteArticle")}</AlertDialogTitle>
                              <AlertDialogDescription>{t("newsCms.confirmDelete")}</AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>{t("newsCms.cancel")}</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDelete(item.id)}>{t("newsCms.deleteArticle")}</AlertDialogAction>
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

export default NewsAdmin;