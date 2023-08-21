#ifndef T200TUITEST_H
#define T200TUITEST_H

#include "T200Common.h"


class T200TuiTest
{
    public:
        T200TuiTest();
        virtual ~T200TuiTest();
        T200TuiTest(const T200TuiTest& other);

        T200BOOL            test_all();

    protected:

    private:
};

#endif // T200TUITEST_H
