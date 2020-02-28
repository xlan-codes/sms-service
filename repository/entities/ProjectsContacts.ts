import { Column, Entity, Index } from "typeorm";

@Index("idx_proj_con_proj", ["projectId"], {})
@Index("idx_proj_con_con", ["contactId"], {})
@Index("projects_contacts_alt", ["projectId", "contactId"], {})
@Entity("projects_contacts", { schema: "sugar" })
export class ProjectsContacts {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "contact_id", nullable: true, length: 36 })
  contactId: string | null;

  @Column("varchar", { name: "project_id", nullable: true, length: 36 })
  projectId: string | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;
}
