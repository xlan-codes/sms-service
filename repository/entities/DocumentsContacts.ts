import { Column, Entity, Index } from "typeorm";

@Index("documents_contacts_contact_id", ["contactId", "documentId"], {})
@Index("documents_contacts_document_id", ["documentId", "contactId"], {})
@Entity("documents_contacts", { schema: "sugar" })
export class DocumentsContacts {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;

  @Column("varchar", { name: "document_id", nullable: true, length: 36 })
  documentId: string | null;

  @Column("varchar", { name: "contact_id", nullable: true, length: 36 })
  contactId: string | null;
}
