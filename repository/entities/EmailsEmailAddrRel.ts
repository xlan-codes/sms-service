import { Column, Entity, Index } from "typeorm";

@Index("idx_eearl_email_id", ["emailId", "addressType"], {})
@Index("idx_eearl_address_id", ["emailAddressId"], {})
@Entity("emails_email_addr_rel", { schema: "sugar" })
export class EmailsEmailAddrRel {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("char", { name: "email_id", length: 36 })
  emailId: string;

  @Column("varchar", { name: "address_type", nullable: true, length: 4 })
  addressType: string | null;

  @Column("char", { name: "email_address_id", length: 36 })
  emailAddressId: string;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;
}
