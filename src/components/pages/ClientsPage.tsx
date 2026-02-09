
import {
  createClient,
  getAllClient,
  removeClient,
  updateClient,
} from "@/redux/slices/clients/client.actions";
import { clientSelector } from "@/redux/slices/clients/client.selector";
import { useDispatch, useSelector } from "@/redux/store";

import { Client, UserFormData as User } from "@/types";
import { useEffect, useState } from "react";
import UserModal from "../organisms/User/UserModal";
import UserTable from "../organisms/User/UserTable";

type UserFormData = Omit<User, "id" | "address" | "company">;

export const ClientsPage = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<Client | null>(null);
  const clients = useSelector(clientSelector.getAllClients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClient());
  }, [dispatch]);

  const handleAddUser = () => {
    setEditingUser(null);
    setIsUserModalOpen(true);
  };

  const handleEditUser = (user: Client) => {
    setEditingUser(user);
    setIsUserModalOpen(true);
  };

  const handleSaveUser = (userData: UserFormData) => {
    const payload = {
      id: clients!.length + 1,
      ...userData,
    };

    editingUser
      ? dispatch(updateClient(editingUser.id, userData, () => {}))
      : dispatch(createClient(payload, () => {}));
  };

  const handleDeleteUser = (userUuid: string) => {
    dispatch(removeClient(userUuid));
  };


  return (
    <div>
      <UserTable
        clients={clients}
        onEditUser={handleEditUser}
        onDeleteUser={handleDeleteUser}
        onAddUser={handleAddUser}
      />

      <UserModal
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
        onSave={handleSaveUser}
        editUser={editingUser}
      />
    </div>
  );
};
