export declare class Relationships {
    id: string;
    relationshipName: string | null;
    lhsModule: string | null;
    lhsTable: string | null;
    lhsKey: string | null;
    rhsModule: string | null;
    rhsTable: string | null;
    rhsKey: string | null;
    joinTable: string | null;
    joinKeyLhs: string | null;
    joinKeyRhs: string | null;
    relationshipType: string | null;
    relationshipRoleColumn: string | null;
    relationshipRoleColumnValue: string | null;
    reverse: boolean | null;
    deleted: boolean | null;
}
