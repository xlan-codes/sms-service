import { Column, Entity, Index } from "typeorm";

@Index("idx_usr_call_call", ["callId"], {})
@Index("idx_usr_call_usr", ["userId"], {})
@Index("idx_call_users", ["callId", "userId"], {})
@Entity("calls_users", { schema: "sugar" })
export class CallsUsers {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "call_id", nullable: true, length: 36 })
  callId: string | null;

  @Column("varchar", { name: "user_id", nullable: true, length: 36 })
  userId: string | null;

  @Column("varchar", {
    name: "required",
    nullable: true,
    length: 1,
    default: () => "'1'"
  })
  required: string | null;

  @Column("varchar", {
    name: "accept_status",
    nullable: true,
    length: 25,
    default: () => "'none'"
  })
  acceptStatus: string | null;

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
