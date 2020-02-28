import { Column, Entity, Index } from "typeorm";

@Index("email_mp_prospects", ["emailMarketingId", "prospectListId"], {})
@Entity("email_marketing_prospect_lists", { schema: "sugar" })
export class EmailMarketingProspectLists {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "prospect_list_id", nullable: true, length: 36 })
  prospectListId: string | null;

  @Column("varchar", { name: "email_marketing_id", nullable: true, length: 36 })
  emailMarketingId: string | null;

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
