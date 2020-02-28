import { Column, Entity } from "typeorm";

@Entity("inbound_email_cache_ts", { schema: "sugar" })
export class InboundEmailCacheTs {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("int", { name: "ie_timestamp", nullable: true, unsigned: true })
  ieTimestamp: number | null;
}
