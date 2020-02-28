import { Column, Entity, Index } from "typeorm";

@Index("idx_con_opp_con", ["contactId"], {})
@Index("idx_con_opp_opp", ["opportunityId"], {})
@Index("idx_opportunities_contacts", ["opportunityId", "contactId"], {})
@Entity("opportunities_contacts", { schema: "sugar" })
export class OpportunitiesContacts {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "contact_id", nullable: true, length: 36 })
  contactId: string | null;

  @Column("varchar", { name: "opportunity_id", nullable: true, length: 36 })
  opportunityId: string | null;

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
