import { Column, Entity, Index } from "typeorm";

@Index(
  "idx_ea_caps_opt_out_invalid",
  ["emailAddressCaps", "optOut", "invalidEmail"],
  {}
)
@Index("idx_ea_opt_out_invalid", ["emailAddress", "optOut", "invalidEmail"], {})
@Entity("email_addresses", { schema: "sugar" })
export class EmailAddresses {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "email_address", nullable: true, length: 255 })
  emailAddress: string | null;

  @Column("varchar", {
    name: "email_address_caps",
    nullable: true,
    length: 255
  })
  emailAddressCaps: string | null;

  @Column("tinyint", {
    name: "invalid_email",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  invalidEmail: boolean | null;

  @Column("tinyint", {
    name: "opt_out",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  optOut: boolean | null;

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
