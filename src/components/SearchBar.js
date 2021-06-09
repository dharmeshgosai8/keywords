function SearchBar() {
    return(
        <div className="container">
            <form>
                <input type="text" name="keyword" className="gsu-search" required={true} id="keyword" placeholder="Search" />
                <input type="submit" className="gsu-btn" />
            </form>
        </div>
    )
}

export default SearchBar;