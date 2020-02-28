import { Column, Entity, Index } from "typeorm";

@Index("idx_folder_id_assigned_user_id", ["folderId", "assignedUserId"], {})
@Entity("folders_subscriptions", { schema: "sugar" })
export class FoldersSubscriptions {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("char", { name: "folder_id", length: 36 })
  folderId: string;

  @Column("char", { name: "assigned_user_id", length: 36 })
  assignedUserId: string;
}
