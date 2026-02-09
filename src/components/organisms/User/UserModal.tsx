import Button from "@/components/atoms/Button";
import FormField from "@/components/molecules/FormField";
import CustomModal from "@/components/organisms/Modal/Modal";
import { Client, UserFormData as User } from "@/types";
import React, { useEffect, useState } from "react";

type UserFormData = Omit<User, "address" | "company">;

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (userData: UserFormData) => void;
  editUser?: Client | null;
}

export default function UserModal({
  isOpen,
  onClose,
  onSave,
  editUser,
}: UserModalProps) {
  const [formData, setFormData] = useState<UserFormData>({
    id: 0,
    name: "",
    phone: "",
    email: "",
    website: "",
    username: "",
  });
  const [errors, setErrors] = useState<Partial<UserFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (editUser) {
        setFormData({
          id: editUser.id,
          name: editUser.name,
          phone: editUser.phone,
          email: editUser.email,
          website: editUser.website,
          username: editUser.username,
        });
      } else {
        setFormData({
          id: 0,
          name: "",
          phone: "",
          email: "",
          website: "",
          username: "",
        });
      }
      setErrors({});
    }
  }, [isOpen, editUser]);

  const validateForm = (): boolean => {
    const newErrors: Partial<UserFormData> = {};

    // Nombre
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    // Nombre
    if (!formData.username.trim()) {
      newErrors.username = "El usuario es requerido";
    }

    // Teléfono (formato flexible internacional)
    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido";
    } else if (!/^[+]?[\d\s()-]{7,}$/.test(formData.phone)) {
      newErrors.phone = "Ingrese un número de teléfono válido";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingrese un email válido";
    }

    // Website
    if (formData.website.trim()) {
      try {
        new URL(formData.website);
      } catch {
        newErrors.website = "Ingrese una URL válida (https://...)";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await onSave(formData);
      onClose();
    } catch (error) {
      console.error("Error saving user:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof UserFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (!isOpen) return null;

  return (
    <CustomModal
      title={editUser ? "Editar Usuario" : "Agregar Nuevo Usuario"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Nombre Completo *"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Juan"
            error={errors.name}
          />
          <FormField
            label="Usuario *"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="juan123"
            error={errors.username}
          />
          <FormField
            label="Sitio Web"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://miweb.com"
            error={errors.website}
          />
          <FormField
            label="Email *"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="juan@ejemplo.com"
            error={errors.email}
          />
          <FormField
            label="Celular *"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="1-770-736-8031"
            error={errors.phone}
          />{" "}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancelar
          </Button>

          <Button type="submit" isLoading={isSubmitting}>
            {editUser ? "Actualizar Usuario" : "Crear Usuario"}
          </Button>
        </div>
      </form>
    </CustomModal>
  );
}
