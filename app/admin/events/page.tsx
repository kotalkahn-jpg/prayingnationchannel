"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Event = {
  id: string;
  title: string;
  description: string;
  event_date: string;
  image_url: string | null;
  is_published: boolean;
};

export default function AdminEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isPublished, setIsPublished] = useState(false);

  const fetchEvents = async () => {
    const res = await fetch("/api/events");
    const data = await res.json();
    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const uploadImage = async () => {
    if (!imageFile) return null;

    const fileName = `event-${Date.now()}-${imageFile.name}`;

    const { error } = await supabase.storage
      .from("article-images")
      .upload(fileName, imageFile);

    if (error) return null;

    const { data } = supabase.storage
      .from("article-images")
      .getPublicUrl(fileName);

    return data.publicUrl;
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    const imageUrl = await uploadImage();

    await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        event_date: eventDate,
        image_url: imageUrl,
        is_published: isPublished,
      }),
    });

    setTitle("");
    setDescription("");
    setEventDate("");
    setImageFile(null);
    setIsPublished(false);

    fetchEvents();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/events?id=${id}`, { method: "DELETE" });
    fetchEvents();
  };

  const togglePublish = async (id: string, current: boolean) => {
    await fetch("/api/events", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        is_published: !current,
      }),
    });

    fetchEvents();
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-10">
        Events Management
      </h1>

      {/* CREATE FORM */}
      <form
        onSubmit={handleCreate}
        className="bg-white p-8 rounded-2xl shadow-lg mb-12 space-y-4"
      >
        <h2 className="text-xl font-semibold mb-4">
          Create Event
        </h2>

        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-4 py-3 rounded-lg"
          required
        />

        <textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-4 py-3 rounded-lg"
          required
        />

        <input
          type="datetime-local"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="w-full border px-4 py-3 rounded-lg"
          required
        />

        <input
          type="file"
          onChange={(e) =>
            e.target.files && setImageFile(e.target.files[0])
          }
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
          Create Event
        </button>
      </form>

      {/* EVENTS TABLE */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-xl font-semibold mb-6">
          Existing Events
        </h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Title</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-b">
                <td className="py-3">{event.title}</td>
                <td className="py-3">
                  {new Date(event.event_date).toLocaleString()}
                </td>
                <td className="py-3">
                  {event.is_published ? "Published" : "Draft"}
                </td>
                <td className="py-3 space-x-4">
                  <button
                    onClick={() =>
                      togglePublish(event.id, event.is_published)
                    }
                    className="text-blue-600"
                  >
                    Toggle
                  </button>

                  <button
                    onClick={() => handleDelete(event.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
