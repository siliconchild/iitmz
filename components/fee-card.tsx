import styles from "./fee-card.module.scss";
import { ReactElement } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";


type FeeCardProps = {
    title: string;
    amount: string;
};

export function FeeCard({ title, amount }: FeeCardProps) {
    return (
        <div className={styles.feeCard}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.amount}>{amount}</p>
        </div>
    );
}

type CourseFeeCardsProps = {
    children: ReactElement<typeof FeeCard> | ReactElement<typeof FeeCard>[];
};

export function CourseFeeCards({ children }: CourseFeeCardsProps) {
    return (
        <div className={styles.wrapper}>
            <h4 className={styles.heading}>Fee Details</h4>
            <div className={styles.feeCardsContainer}>
                {children}
            </div>
            <div className={styles.feeDetails}>
                <h4 className={styles.header}>Hostel Fee</h4>
                <p>Accommodation &amp; Mess charges are extra and it will be updated soon.</p>
                <h4 className={styles.headings}>Note:</h4>
                <ol className={styles.list}>
                    <li>
                    <BsArrowRightCircleFill />
                        Students may choose on-campus or off-campus accommodation. Off-campus students
                        needn’t pay the hostel accommodation &amp; mess fee.
                    </li>
                    <li>
                    <BsArrowRightCircleFill />
                        Students living on or off-campus may avail the dining facility on the campus by paying the
                        dining facility fee. Partial availing of the dining will not be permitted.
                    </li>
                </ol>
                <p className={styles.note}>*Fee structure for 2025; subject to revision</p>
            </div>
        </div>

    );
}
