goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22427__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22428__i = 0, G__22428__a = new Array(arguments.length -  0);
while (G__22428__i < G__22428__a.length) {G__22428__a[G__22428__i] = arguments[G__22428__i + 0]; ++G__22428__i;}
  args = new cljs.core.IndexedSeq(G__22428__a,0);
} 
return G__22427__delegate.call(this,args);};
G__22427.cljs$lang$maxFixedArity = 0;
G__22427.cljs$lang$applyTo = (function (arglist__22429){
var args = cljs.core.seq(arglist__22429);
return G__22427__delegate(args);
});
G__22427.cljs$core$IFn$_invoke$arity$variadic = G__22427__delegate;
return G__22427;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22430__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22430 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22431__i = 0, G__22431__a = new Array(arguments.length -  0);
while (G__22431__i < G__22431__a.length) {G__22431__a[G__22431__i] = arguments[G__22431__i + 0]; ++G__22431__i;}
  args = new cljs.core.IndexedSeq(G__22431__a,0);
} 
return G__22430__delegate.call(this,args);};
G__22430.cljs$lang$maxFixedArity = 0;
G__22430.cljs$lang$applyTo = (function (arglist__22432){
var args = cljs.core.seq(arglist__22432);
return G__22430__delegate(args);
});
G__22430.cljs$core$IFn$_invoke$arity$variadic = G__22430__delegate;
return G__22430;
})()
;

return null;
});
