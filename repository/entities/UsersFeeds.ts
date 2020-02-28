import { Column, Entity, Index } from "typeorm";

@Index("idx_ud_user_id", ["userId", "feedId"], {})
@Entity("users_feeds", { schema: "sugar" })
export class UsersFeeds {
  @Column("varchar", { name: "user_id", nullable: true, length: 36 })
  userId: string | null;

  @Column("varchar", { name: "feed_id", nullable: true, length: 36 })
  feedId: string | null;

  @Column("int", { name: "rank", nullable: true })
  rank: number | null;

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
