import { Column, Entity, Index } from "typeorm";

@Index(
  "idx_user_name",
  ["userName", "isGroup", "status", "lastName", "firstName", "id"],
  {}
)
@Entity("users", { schema: "sugar" })
export class Users {
  @Column("char", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "user_name", nullable: true, length: 60 })
  userName: string | null;

  @Column("varchar", { name: "user_hash", nullable: true, length: 255 })
  userHash: string | null;

  @Column("tinyint", {
    name: "system_generated_password",
    nullable: true,
    width: 1
  })
  systemGeneratedPassword: boolean | null;

  @Column("datetime", { name: "pwd_last_changed", nullable: true })
  pwdLastChanged: Date | null;

  @Column("varchar", { name: "authenticate_id", nullable: true, length: 100 })
  authenticateId: string | null;

  @Column("tinyint", {
    name: "sugar_login",
    nullable: true,
    width: 1,
    default: () => "'1'"
  })
  sugarLogin: boolean | null;

  @Column("varchar", { name: "first_name", nullable: true, length: 30 })
  firstName: string | null;

  @Column("varchar", { name: "last_name", nullable: true, length: 30 })
  lastName: string | null;

  @Column("tinyint", {
    name: "is_admin",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  isAdmin: boolean | null;

  @Column("tinyint", {
    name: "external_auth_only",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  externalAuthOnly: boolean | null;

  @Column("tinyint", {
    name: "receive_notifications",
    nullable: true,
    width: 1,
    default: () => "'1'"
  })
  receiveNotifications: boolean | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("datetime", { name: "date_entered", nullable: true })
  dateEntered: Date | null;

  @Column("datetime", { name: "date_modified", nullable: true })
  dateModified: Date | null;

  @Column("char", { name: "modified_user_id", nullable: true, length: 36 })
  modifiedUserId: string | null;

  @Column("char", { name: "created_by", nullable: true, length: 36 })
  createdBy: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 50 })
  title: string | null;

  @Column("varchar", { name: "department", nullable: true, length: 50 })
  department: string | null;

  @Column("varchar", { name: "phone_home", nullable: true, length: 50 })
  phoneHome: string | null;

  @Column("varchar", { name: "phone_mobile", nullable: true, length: 50 })
  phoneMobile: string | null;

  @Column("varchar", { name: "phone_work", nullable: true, length: 50 })
  phoneWork: string | null;

  @Column("varchar", { name: "phone_other", nullable: true, length: 50 })
  phoneOther: string | null;

  @Column("varchar", { name: "phone_fax", nullable: true, length: 50 })
  phoneFax: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 100 })
  status: string | null;

  @Column("varchar", { name: "address_street", nullable: true, length: 150 })
  addressStreet: string | null;

  @Column("varchar", { name: "address_city", nullable: true, length: 100 })
  addressCity: string | null;

  @Column("varchar", { name: "address_state", nullable: true, length: 100 })
  addressState: string | null;

  @Column("varchar", { name: "address_country", nullable: true, length: 100 })
  addressCountry: string | null;

  @Column("varchar", { name: "address_postalcode", nullable: true, length: 20 })
  addressPostalcode: string | null;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;

  @Column("tinyint", {
    name: "portal_only",
    nullable: true,
    width: 1,
    default: () => "'0'"
  })
  portalOnly: boolean | null;

  @Column("tinyint", {
    name: "show_on_employees",
    nullable: true,
    width: 1,
    default: () => "'1'"
  })
  showOnEmployees: boolean | null;

  @Column("varchar", { name: "employee_status", nullable: true, length: 100 })
  employeeStatus: string | null;

  @Column("varchar", { name: "messenger_id", nullable: true, length: 100 })
  messengerId: string | null;

  @Column("varchar", { name: "messenger_type", nullable: true, length: 100 })
  messengerType: string | null;

  @Column("char", { name: "reports_to_id", nullable: true, length: 36 })
  reportsToId: string | null;

  @Column("tinyint", { name: "is_group", nullable: true, width: 1 })
  isGroup: boolean | null;
}
