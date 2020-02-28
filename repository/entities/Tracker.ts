import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_tracker_iid", ["itemId"], {})
@Index("idx_tracker_userid_vis_id", ["userId", "visible", "id"], {})
@Index("idx_tracker_userid_itemid_vis", ["userId", "itemId", "visible"], {})
@Index("idx_tracker_monitor_id", ["monitorId"], {})
@Index("idx_tracker_date_modified", ["dateModified"], {})
@Entity("tracker", { schema: "sugar" })
export class Tracker {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("char", { name: "monitor_id", length: 36 })
  monitorId: string;

  @Column("varchar", { name: "user_id", nullable: true, length: 36 })
  userId: string | null;

  @Column("varchar", { name: "module_name", nullable: true, length: 255 })
  moduleName: string | null;

  @Column("varchar", { name: "item_id", nullable: true, length: 36 })
  itemId: string | null;

  @Column("varchar", { name: "item_summary", nullable: true, length: 255 })
  itemSummary: string | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("varchar", { name: "action", nullable: true, length: 255 })
  action: string | null;

  @Column("varchar", { name: "session_id", nullable: true, length: 36 })
  sessionId: string | null;

  @Column("tinyint", {
    name: "visible",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  visible: boolean | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;
}
