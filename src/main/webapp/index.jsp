<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Angular QuickStart</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="styles.css">

        <c:choose>
            <c:when test="${!Boolean.valueOf(initParam['aotEnabled'])}">
                <!-- 1. Load libraries -->
                <!-- Polyfill for older browsers -->
                <script src="node_modules/core-js/client/shim.min.js"></script>
                <script src="node_modules/zone.js/dist/zone.js"></script>
                <script src="node_modules/reflect-metadata/Reflect.js"></script>
                <script src="node_modules/systemjs/dist/system.src.js"></script>
                <!-- 2. Configure SystemJS -->
                <script src="systemjs.config.js"></script>
                <script>
                    System.import('app').catch(function (err) {
                        console.error(err);
                    });
                </script>
            </c:when>
            <c:otherwise>
                <!-- 1. Load libraries -->
                <script src="node_modules/core-js/client/shim.min.js"></script>
                <script src="node_modules/zone.js/dist/zone.js"></script>
                <script>window.module = 'app';</script>
            </c:otherwise>
        </c:choose>

    </head>
    <!-- 3. Display the application -->
    <body>
    <my-app>Loading...</my-app>
        <c:if test="${Boolean.valueOf(initParam['aotEnabled'])}">
        <script src="dist/build.js"></script>
    </c:if> 
</body>
</html>
