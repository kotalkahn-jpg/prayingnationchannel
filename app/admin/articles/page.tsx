"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import RichTextEditor from "@/components/RichTextEditor";




type Article = {
  id: string;
  title: string;
  slug: string;
  content: string;
  image_url: string | null;
  is_published: boolean;
};

export default function AdminArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isPublished, setIsPublished] = useState(false);

  const fetchArticles = async () => {
    const res = await fetch("/api/articles");
    const data = await res.json();
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const uploadImage = async () => {
    if (!imageFile) return null;

    const fileName = `${Date.now()}-${imageFile.name}`;

    const { data, error } = await supabase.storage
      .from("article-images")
      .upload(fileName, imageFile);

    if (error) {
      console.error(error);
      return null;
    }

    const { data: publicUrlData } = supabase.storage
      .from("article-images")
      .getPublicUrl(fileName);

    return publicUrlData.publicUrl;
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    const imageUrl = await uploadImage();

    await fetch("/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content,
        slug: title.toLowerCase().replace(/\s+/g, "-"),
        image_url: imageUrl,
        is_published: isPublished,
      }),
    });

    setTitle("");
    setContent("");
    setImageFile(null);
    setIsPublished(false);
    fetchArticles();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/articles?id=${id}`, { method: "DELETE" });
    fetchArticles();
  };

  const togglePublish = async (id: string, currentStatus: boolean) => {
    await fetch(`/api/articles/publish`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, is_published: !currentStatus }),
    });

    fetchArticles();
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-10">
        Articles Management
      </h1>

      {/* CREATE FORM */}
      <form
        onSubmit={handleCreate}
        className="bg-white p-8 rounded-2xl shadow-lg mb-12 space-y-4"
      >
        <h2 className="text-xl font-semibold mb-4">
          Create Article
        </h2>

        <input
          type="text"
          placeholder="Article Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-4 py-3 rounded-lg"
          required
        />

        <RichTextEditor
  content={content}
  onChange={setContent}
/>


        <input
          type="file"
          onChange={(e) => {
            if (e.target.files) setImageFile(e.target.files[0]);
          }}
          className="w-full"
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isPublished}
            onChange={() => setIsPublished(!isPublished)}
          />
          Publish immediately
        </label>

        <button className="bg-[#D4AF37] text-[#0B1E3D] px-6 py-3 rounded-lg font-semibold">
          Create Article
        </button>
      </form>

      {/* ARTICLES TABLE */}
      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h2 className="text-xl font-semibold mb-6">
          Existing Articles
        </h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {articles.map((article) => (
              <tr key={article.id} className="border-b">
                <td className="py-3">{article.title}</td>
                <td className="py-3">
                  {article.is_published ? "Published" : "Draft"}
                </td>
                <td className="py-3 space-x-4">
                  <button
                    onClick={() =>
                      togglePublish(article.id, article.is_published)
                    }
                    className="text-blue-600"
                  >
                    Toggle
                  </button>

                  <button
  onClick={() => setEditingArticle(article)}
  className="text-green-600"
>
  Edit
</button>


                  <button
                    onClick={() => handleDelete(article.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editingArticle && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-2xl w-full max-w-2xl">

      <h2 className="text-xl font-bold mb-6">
        Edit Article
      </h2>

      <input
        value={editingArticle.title}
        onChange={(e) =>
          setEditingArticle({
            ...editingArticle,
            title: e.target.value,
          })
        }
        className="w-full border px-4 py-3 rounded-lg mb-4"
      />

      <RichTextEditor
  content={content}
  onChange={setContent}
/>


      <div className="flex justify-end gap-4">
        <button
          onClick={() => setEditingArticle(null)}
          className="px-4 py-2 border rounded-lg"
        >
          Cancel
        </button>

        <button
          onClick={async () => {
            await fetch("/api/articles", {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(editingArticle),
            });

            setEditingArticle(null);
            fetchArticles();
          }}
          className="bg-[#D4AF37] text-[#0B1E3D] px-6 py-2 rounded-lg"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
)}


      </div>
    </div>
  );
}
