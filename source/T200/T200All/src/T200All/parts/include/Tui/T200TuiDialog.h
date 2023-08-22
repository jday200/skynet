#ifndef T200TUIDIALOG_H
#define T200TUIDIALOG_H

#include "T200Common.h"
#include "T200TuiDialogBase.h"

class T200TuiDialog : public T200TuiDialogBase
{
    public:
        T200TuiDialog();
        virtual ~T200TuiDialog();

        T200VOID            show();
        T200VOID            hide();

    protected:

    private:
};

#endif // T200TUIDIALOG_H
