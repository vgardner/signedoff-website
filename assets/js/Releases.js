var React = require('react');

module.exports = React.createClass({
  filterList: function(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },
  getInitialState: function(){
     return {
       initialItems: [
         "Apples",
         "Broccoli",
         "Chicken",
         "Duck",
         "Eggs",
         "Fish",
         "Granola",
         "Hash Browns"
       ],
       items: []
     }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },
  render: function(){
    return (
      <div className="filter-list">
      <ReleaseList items={this.props.items}/>
      </div>
    );
  }
});

var ReleaseList = React.createClass({
  render: function(){
    return (
      <ul>
        {
        this.props.items.map(function(item, i) {
          return (
            <li key={i}>
              <ul>
                <ReleaseTitle title={item.ReleaseId}/>
                <CommitList items={item.Commits}/>
              </ul>
            </li>
          );
        })
       }
      </ul>
    )
  }
});

var ReleaseTitle = React.createClass({
  render: function(){
    return <li key={this.props.title}>{this.props.title}</li>;
  }
});

var CommitList = React.createClass({
  render: function(){
    return (
      <ul>
      {
        this.props.items.map(function(item, i) {
          return (
            <ul key={i}>
              <li key={item.Sha}>{item.Message}</li>
              <SignedInput sha={item.Sha} />
            </ul>
          );
        })
       }
      </ul>
    )
  }
});

var SignedInput = React.createClass({
  render: function(){
    return <input type="checkbox" key={this.props.sha} />
  }
});

