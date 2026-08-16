import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { mailtoLink, whatsappLink } from "@/data/site";

export function EnquiryForm({ product }: { product?: string }) {
  const [form, setForm] = useState({
    name: "",
    hospital: "",
    phone: "",
    city: "",
    message: product ? `I would like a quotation for ${product}.` : "",
  });

  const compose = () =>
    `Enquiry from ${form.name || "—"}\nHospital: ${form.hospital || "—"}\nPhone: ${form.phone || "—"}\nCity: ${form.city || "—"}\n\n${form.message || "—"}`;

  const validate = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please add your name and phone number.");
      return false;
    }
    return true;
  };

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (!validate()) return;
        window.location.href = mailtoLink(
          product ? `Quote request — ${product}` : "Enquiry — JD Healthcares",
          compose(),
        );
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Your name *</Label>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hospital">Hospital / organisation</Label>
          <Input
            id="hospital"
            value={form.hospital}
            onChange={(e) => setForm({ ...form, hospital: e.target.value })}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Requirement</Label>
        <Textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
          Send by email
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            if (!validate()) return;
            window.open(whatsappLink(compose()), "_blank", "noopener");
          }}
        >
          Send on WhatsApp
        </Button>
      </div>
    </form>
  );
}
