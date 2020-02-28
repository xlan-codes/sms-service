import { Column, Entity, Index } from "typeorm";

@Index("idx_config_cat", ["category"], {})
@Entity("config", { schema: "sugar" })
export class Config {
  @Column("varchar", { name: "category", nullable: true, length: 32 })
  category: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 32 })
  name: string | null;

  @Column("text", { name: "value", nullable: true })
  value: string | null;
}
