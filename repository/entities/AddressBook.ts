import { Column, Entity, Index } from "typeorm";

@Index("ab_user_bean_idx", ["assignedUserId", "bean"], {})
@Entity("address_book", { schema: "sugar" })
export class AddressBook {
  @Column("char", { name: "assigned_user_id", length: 36 })
  assignedUserId: string;

  @Column("varchar", { name: "bean", nullable: true, length: 50 })
  bean: string | null;

  @Column("char", { name: "bean_id", length: 36 })
  beanId: string;
}
