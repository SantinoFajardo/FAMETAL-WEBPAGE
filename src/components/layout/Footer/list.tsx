const List: any = ({ list }: { list: string }) => {
  return (
    <li className="mb-4">
      <a href="#" className="hover:underline">
        {list}
      </a>
    </li>
  );
};

export default List;
