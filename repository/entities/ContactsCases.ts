import { Column, Entity, Index } from "typeorm";

@Index("idx_con_case_con", ["contactId"], {})
@Index("idx_con_case_case", ["caseId"], {})
@Index("idx_contacts_cases", ["contactId", "caseId"], {})
@Entity("contacts_cases", { schema: "sugar" })
export class ContactsCases {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "contact_id", nullable: true, length: 36 })
  contactId: string | null;

  @Column("varchar", { name: "case_id", nullable: true, length: 36 })
  caseId: string | null;

  @Column("varchar", { name: "contact_role", nullable: true, length: 50 })
  contactRole: string | null;

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
