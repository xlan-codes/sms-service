import { Column, Entity, Index } from "typeorm";

@Index("oauth_nonce_keyts", ["conskey", "nonceTs"], {})
@Entity("oauth_nonce", { schema: "sugar" })
export class OauthNonce {
  @Column("varchar", { primary: true, name: "conskey", length: 32 })
  conskey: string;

  @Column("varchar", { primary: true, name: "nonce", length: 32 })
  nonce: string;

  @Column("bigint", { name: "nonce_ts", nullable: true })
  nonceTs: string | null;
}
