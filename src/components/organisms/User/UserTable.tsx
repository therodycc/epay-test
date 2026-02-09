import Button from "@/components/atoms/Button";
import {
  Column,
  DynamicTable,
} from "@/components/organisms/Table/DynamicTable";
import { Client } from "@/types";
import { formatPhone } from "@/utils/format-phone";
import { ArrowUpRightFromSquare, Edit2, Plus, Trash2 } from "lucide-react";

interface UserTableProps {
  clients: Client[] | null;
  onEditUser: (user: Client) => void;
  onDeleteUser: (userId: string) => void;
  onAddUser: () => void;
}

export default function UserTable({
  clients,
  onEditUser,
  onDeleteUser,
  onAddUser,
}: UserTableProps) {
  const handleDelete = (userId: string) => {
    if (
      window.confirm(
        `¿Está seguro de que desea eliminar a este usuario? Esto también eliminará todas las direcciones asociadas.`
      )
    ) {
      onDeleteUser(userId);
    }
  };

  const columns: Column<Client>[] = [
    {
      key: "name",
      label: "Nombre Completo",
      render: (u: any) => <span className="font-medium">{u.name}</span>,
    },
    { key: "username", label: "Usuario" },
    { key: "email", label: "Correo" },
    {
      key: "phone",
      label: "Celular",
      render: (u) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
          {formatPhone(u.phone)}
        </span>
      ),
    },
    {
      key: "website",
      label: "Sitio Web",
      render: (u) => (
        <a
          href={u.website}
          target="_blank"
          rel="noopener noreferrer"
          className="
          inline-flex items-center gap-2
          px-4 py-2
          bg-indigo-600 text-white
          font-semibold text-sm
          rounded-lg shadow-md
          hover:bg-indigo-700 hover:shadow-lg
          transition-colors duration-200
        "
        >
          {u.website}

          <ArrowUpRightFromSquare size={14} />
        </a>
      ),
    },
    {
      key: "actions",
      label: "Acciones",
      align: "right",
      render: (u: any) => (
        <div className="flex justify-end gap-2">
          <Button
            variant="secondary"
            size="sm"
            leftIcon={<Edit2 size={16} />}
            onClick={() => onEditUser(u)}
          />
          <Button
            variant="danger"
            size="sm"
            leftIcon={<Trash2 size={16} />}
            onClick={() => handleDelete(u.uuid)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">
          Gestión de Usuarios
        </h2>
        <Button onClick={onAddUser} leftIcon={<Plus size={16} />}>
          Agregar Usuario
        </Button>
      </div>

      <DynamicTable
        columns={columns}
        data={clients}
        rowKey={(u: any) => u.id}
        emptyMessage="No se encontraron usuarios"
      />
    </div>
  );
}
