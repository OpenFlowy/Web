import { v4 as uuidv4, NIL as NIL_UUID } from 'uuid';

// type 'uuid' is an alias for type 'string'
type uuid = string;

/* List of all Task objects seen so far */
let all_tasks: Task[] = [];

class Task
{
    private _id       : uuid;
    private parent    : Task;
    private children  : Task[];
    private text      : string;

    private static _nilTask: Task;

    constructor(text : string, parent ?: Task)
    {
        if (text === null)
            console.warn('WARNING: Task:constructor:text is null');

        this._id      = uuidv4();
        this.text     = text;
        this.children = [];

        if (parent === undefined)
            parent = Task.nilTask;

        this.parent = parent;
        parent.appendChildren([this]);

        all_tasks.push(this);
    }

    get id() { return this._id; }
    // We don't want others to modify id; not implementing `setter`, or marking
    // it private, has same effect
    //private set id(id: uuid) { this._id = id; }

    static get nilTask() : Task
    {
        if (Task._nilTask === undefined)
        {
            // Cannot use the Task constructor here; will cause infinite
            // recursion.
            Task._nilTask = Object.create(Task.prototype);

            // Special case: nilTask is its own parent
            Task._nilTask.parent = Task._nilTask;
            Task._nilTask._id = NIL_UUID;
            Task._nilTask.children = [];
            Task._nilTask.text = '-';
        }

        return Task._nilTask;
    }

    prependChildren(t: Task[]) { this.children.unshift(...t); }
    appendChildren (t: Task[]) { this.children.push   (...t); }

    setParent(p: Task)
    {
        let originalParent = this.parent;

        if (originalParent === null || originalParent === undefined)
            console.error("ERROR: Parent of this task was null", this);

        originalParent.removeChild(this);
        this.parent = p;
        p.appendChildren([this]);
    }

    removeChild(t : Task)
    {
        let i: number = 0;

        for (let el of this.children)
        {
            if (el === t)
            {
                this.children.splice(i, 1);
                break;
            }
            else
                ++i;
        }

        /*
        this.children.forEach(
            (el : Task, index : number) =>
            {
                if (el === t)
                    this.children.splice(index, 1);
            }
        );
        */
    }

    dom(parentDom: Element) : Element
    {
        let li: Element = document.createElement('li');
        parentDom.appendChild(li);

        /*
         * Prefix the id attribute's value with 'id-' because the ID addtribute
         * must not start with a desimal digit, and the uuid might have a
         * decimal digit as the first character.
         */
        li.setAttribute('id', 'id-'+this._id);
        li.setAttribute('contenteditable', 'true');
        li.innerHTML = this.text;

        if (this.children.length !== 0)
        {
            let ul: Element = document.createElement('ul');
            li.appendChild(ul);
            this.children.forEach( el => { el.dom(ul); } );
        }

        return parentDom;
    }
}

function renderRootTasks( el: Element) : Element
{
    let ul: Element;
    let nilTask : Task = Task.nilTask;

    // Clear any existing children of the target element
    el.replaceChildren();

    ul = document.createElement('ul');
    el.appendChild(ul);

    nilTask.dom(ul);

    return el;
}

function main()
{
    // Create and append a heading element
    let heading = document.createElement('h1');
    heading.textContent = message;
    document.body.appendChild(heading);

    /*
    let t1  : Task = new Task("Task 1");
    let t1_1: Task = new Task("Task 1.1", t1);
    let t1_2: Task = new Task("Task 1.2", t1);
    let t1_3: Task = new Task("Task 1.3", t1);
    let t2  : Task = new Task("Task 2");
    let t2_1: Task = new Task("Task 2.1", t2);
    let t2_2: Task = new Task("Task 2.2", t2);
    let t3  : Task = new Task("Task 3");
    let t3_1: Task = new Task("Task 3.1", t3);
    */

    let T1     : Task = new Task('This is <b>OpenFlowy</b>, an alternative to WorkFlowy'              );//         );
    let T1_1   : Task = new Task(  'Also available at <a href=https://FreeFlowy.com>FreeFlowy.com</a>');//   , T1  );
    let T2     : Task = new Task('Use OpenFlowy to manage your tasks as a list'                       );//         );
    let T2_1   : Task = new Task(  'Each Task can have Subtasks'                                      );//   , T2  );
    let T2_1_1 : Task = new Task(    'A Subtask can have more Subtasks'                               );//   , T2_1);
    let T2_1_2 : Task = new Task(    'Like this'                                                      );//   , T2_1);
    let T2_2   : Task = new Task(  'Once a Task is complete, you can mark it as Completed'            );//   , T2  );
    let T2_2_1 : Task = new Task(    '<s style="color:grey">Like this</s>'                            );//   , T2_2);
    let T3     : Task = new Task('Use OpenFlowy without creating an account'                          );//         );
    let T4     : Task = new Task('Use OpenFlowy even while disconnected from the Internet'            );//         );
    let T5     : Task = new Task('Export and import your data anytime, in clear'                      );//         );

    T1_1  .setParent(T1  );
    T2_1  .setParent(T2  );
    T2_1_1.setParent(T2_1);
    T2_1_2.setParent(T2_1);
    T2_2  .setParent(T2  );
    T2_2_1.setParent(T2_2);


    let appHolder = document.createElement('div');
    renderRootTasks(appHolder);
    document.body.appendChild(appHolder);
}

// Call main() and run the app as soon as DOM is done loading
window.addEventListener('DOMContentLoaded', function() {
    main();
});

let message: string = 'OpenFlowy';
console.log(message);
