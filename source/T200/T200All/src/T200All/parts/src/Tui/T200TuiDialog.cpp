#include "T200TuiDialog.h"

#include "T200Tui.h"


T200TuiDialog::T200TuiDialog()
{
    //ctor
}

T200TuiDialog::~T200TuiDialog()
{
    //dtor
}

T200VOID T200TuiDialog::show()
{
    T200Tui     tui;

    tui.moveto(10, 10);
    tui.print("Hello");

    tui.moveto(20, 20);
    tui.print("World!");

    tui.moveto(10, 10);
    tui.print("Start");

    tui.moveto(0, 25);

    draw();
}

T200VOID T200TuiDialog::hide()
{

}
