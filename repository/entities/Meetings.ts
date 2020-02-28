import { Column, Entity, Index } from "typeorm";

@Index("idx_mtg_name", ["name"], {})
@Index("idx_meet_par_del", ["parentId", "parentType", "deleted"], {})
@Index("idx_meet_stat_del", ["assignedUserId", "status", "deleted"], {})
@Index("idx_meet_date_start", ["dateStart"], {})
@Entity("meetings", { schema: "sugar" })
export class Meetings {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("tinyint", {
    name: "deleted",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  deleted: boolean | null;

  @Column("char", { name: "assigned_user_id", nullable: true, length: 36 })
  assignedUserId: string | null;

  @Column("varchar", { name: "location", nullable: true, length: 50 })
  location: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 50 })
  password: string | null;

  @Column("varchar", { name: "join_url", nullable: true, length: 200 })
  joinUrl: string | null;

  @Column("varchar", { name: "host_url", nullable: true, length: 400 })
  hostUrl: string | null;

  @Column("varchar", { name: "displayed_url", nullable: true, length: 400 })
  displayedUrl: string | null;

  @Column("varchar", { name: "creator", nullable: true, length: 50 })
  creator: string | null;

  @Column("varchar", { name: "external_id", nullable: true, length: 50 })
  externalId: string | null;

  @Column("int", { name: "duration_hours", nullable: true })
  durationHours: number | null;

  @Column("int", { name: "duration_minutes", nullable: true })
  durationMinutes: number | null;

  @Column("datetime", { name: "date_start", nullable: true })
  dateStart: Date | null;

  @Column("datetime", { name: "date_end", nullable: true })
  dateEnd: Date | null;

  @Column("varchar", { name: "parent_type", nullable: true, length: 100 })
  parentType: string | null;

  @Column("varchar", {
    name: "status",
    nullable: true,
    length: 100,
    default: () => "'Planned'"
  })
  status: string | null;

  @Column("varchar", {
    name: "type",
    nullable: true,
    length: 255,
    default: () => "'Sugar'"
  })
  type: string | null;

  @Column("char", { name: "parent_id", nullable: true, length: 36 })
  parentId: string | null;

  @Column("int", {
    name: "reminder_time",
    nullable: true,
    default: () => "'-1'"
  })
  reminderTime: number | null;

  @Column("int", {
    name: "email_reminder_time",
    nullable: true,
    default: () => "'-1'"
  })
  emailReminderTime: number | null;

  @Column("tinyint", {
    name: "email_reminder_sent",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  emailReminderSent: boolean | null;

  @Column("varchar", { name: "outlook_id", nullable: true, length: 255 })
  outlookId: string | null;

  @Column("int", { name: "sequence", nullable: true, default: () => "'0'" })
  sequence: number | null;

  @Column("varchar", { name: "repeat_type", nullable: true, length: 36 })
  repeatType: string | null;

  @Column("int", {
    name: "repeat_interval",
    nullable: true,
    default: () => "'1'"
  })
  repeatInterval: number | null;

  @Column("varchar", { name: "repeat_dow", nullable: true, length: 7 })
  repeatDow: string | null;

  @Column("date", { name: "repeat_until", nullable: true })
  repeatUntil: string | null;

  @Column("int", { name: "repeat_count", nullable: true })
  repeatCount: number | null;

  @Column("char", { name: "repeat_parent_id", nullable: true, length: 36 })
  repeatParentId: string | null;

  @Column("varchar", { name: "recurring_source", nullable: true, length: 36 })
  recurringSource: string | null;
}
