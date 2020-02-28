import { Column, Entity, Index } from "typeorm";

@Index("idx_email_address_id", ["emailAddressId"], {})
@Index("idx_bean_id", ["beanId", "beanModule"], {})
@Entity("email_addr_bean_rel", { schema: "sugar" })
export class EmailAddrBeanRel {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("char", { name: "email_address_id", length: 36 })
  emailAddressId: string;

  @Column("char", { name: "bean_id", length: 36 })
  beanId: string;

  @Column("varchar", { name: "bean_module", nullable: true, length: 100 })
  beanModule: string | null;

  @Column("tinyint", {
    name: "primary_address",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  primaryAddress: boolean | null;

  @Column("tinyint", {
    name: "reply_to_address",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  replyToAddress: boolean | null;

  @Column("datetime", { name: "date_created", nullable: true })
  dateCreated: Date | null;

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
