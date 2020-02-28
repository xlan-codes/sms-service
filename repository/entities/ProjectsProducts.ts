import { Column, Entity, Index } from "typeorm";

@Index("idx_proj_prod_project", ["projectId"], {})
@Index("idx_proj_prod_product", ["productId"], {})
@Index("projects_products_alt", ["projectId", "productId"], {})
@Entity("projects_products", { schema: "sugar" })
export class ProjectsProducts {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "product_id", nullable: true, length: 36 })
  productId: string | null;

  @Column("varchar", { name: "project_id", nullable: true, length: 36 })
  projectId: string | null;

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
