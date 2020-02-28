import { Column, Entity, Index } from "typeorm";

@Index("idx_rel_name", ["relationshipName"], {})
@Entity("relationships", { schema: "sugar" })
export class Relationships {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "relationship_name", nullable: true, length: 150 })
  relationshipName: string | null;

  @Column("varchar", { name: "lhs_module", nullable: true, length: 100 })
  lhsModule: string | null;

  @Column("varchar", { name: "lhs_table", nullable: true, length: 64 })
  lhsTable: string | null;

  @Column("varchar", { name: "lhs_key", nullable: true, length: 64 })
  lhsKey: string | null;

  @Column("varchar", { name: "rhs_module", nullable: true, length: 100 })
  rhsModule: string | null;

  @Column("varchar", { name: "rhs_table", nullable: true, length: 64 })
  rhsTable: string | null;

  @Column("varchar", { name: "rhs_key", nullable: true, length: 64 })
  rhsKey: string | null;

  @Column("varchar", { name: "join_table", nullable: true, length: 128 })
  joinTable: string | null;

  @Column("varchar", { name: "join_key_lhs", nullable: true, length: 128 })
  joinKeyLhs: string | null;

  @Column("varchar", { name: "join_key_rhs", nullable: true, length: 128 })
  joinKeyRhs: string | null;

  @Column("varchar", { name: "relationship_type", nullable: true, length: 64 })
  relationshipType: string | null;

  @Column("varchar", {
    name: "relationship_role_column",
    nullable: true,
    length: 64
  })
  relationshipRoleColumn: string | null;

  @Column("varchar", {
    name: "relationship_role_column_value",
    nullable: true,
    length: 50
  })
  relationshipRoleColumnValue: string | null;

  @Column("tinyint", {
    name: "reverse",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  reverse: boolean | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;
}
