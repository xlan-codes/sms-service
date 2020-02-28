import { Column, Entity, Index } from "typeorm";

@Index("oauth_state_ts", ["tstate", "tokenTs"], {})
@Index("constoken_key", ["consumer"], {})
@Entity("oauth_tokens", { schema: "sugar" })
export class OauthTokens {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "secret", nullable: true, length: 32 })
  secret: string | null;

  @Column("varchar", { name: "tstate", nullable: true, length: 1 })
  tstate: string | null;

  @Column("char", { name: "consumer", length: 36 })
  consumer: string;

  @Column("bigint", { name: "token_ts", nullable: true })
  tokenTs: string | null;

  @Column("varchar", { name: "verify", nullable: true, length: 32 })
  verify: string | null;

  @Column("tinyint", {
    primary: true,
    name: "deleted",
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean;

  @Column("varchar", { name: "callback_url", nullable: true, length: 255 })
  callbackUrl: string | null;

  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;
}
