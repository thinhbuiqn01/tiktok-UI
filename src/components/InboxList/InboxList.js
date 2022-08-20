import AccountItem from '../Accountitem';

function InboxList({ children, className }) {
    return (
        <div className={className}>
            <AccountItem />
        </div>
    );
}

export default InboxList;
