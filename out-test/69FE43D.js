goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35454__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35455__i = 0, G__35455__a = new Array(arguments.length -  0);
while (G__35455__i < G__35455__a.length) {G__35455__a[G__35455__i] = arguments[G__35455__i + 0]; ++G__35455__i;}
  args = new cljs.core.IndexedSeq(G__35455__a,0);
} 
return G__35454__delegate.call(this,args);};
G__35454.cljs$lang$maxFixedArity = 0;
G__35454.cljs$lang$applyTo = (function (arglist__35456){
var args = cljs.core.seq(arglist__35456);
return G__35454__delegate(args);
});
G__35454.cljs$core$IFn$_invoke$arity$variadic = G__35454__delegate;
return G__35454;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35457__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35458__i = 0, G__35458__a = new Array(arguments.length -  0);
while (G__35458__i < G__35458__a.length) {G__35458__a[G__35458__i] = arguments[G__35458__i + 0]; ++G__35458__i;}
  args = new cljs.core.IndexedSeq(G__35458__a,0);
} 
return G__35457__delegate.call(this,args);};
G__35457.cljs$lang$maxFixedArity = 0;
G__35457.cljs$lang$applyTo = (function (arglist__35459){
var args = cljs.core.seq(arglist__35459);
return G__35457__delegate(args);
});
G__35457.cljs$core$IFn$_invoke$arity$variadic = G__35457__delegate;
return G__35457;
})()
;

return null;
});
