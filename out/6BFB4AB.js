goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34585__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34586__i = 0, G__34586__a = new Array(arguments.length -  0);
while (G__34586__i < G__34586__a.length) {G__34586__a[G__34586__i] = arguments[G__34586__i + 0]; ++G__34586__i;}
  args = new cljs.core.IndexedSeq(G__34586__a,0);
} 
return G__34585__delegate.call(this,args);};
G__34585.cljs$lang$maxFixedArity = 0;
G__34585.cljs$lang$applyTo = (function (arglist__34587){
var args = cljs.core.seq(arglist__34587);
return G__34585__delegate(args);
});
G__34585.cljs$core$IFn$_invoke$arity$variadic = G__34585__delegate;
return G__34585;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34588__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34589__i = 0, G__34589__a = new Array(arguments.length -  0);
while (G__34589__i < G__34589__a.length) {G__34589__a[G__34589__i] = arguments[G__34589__i + 0]; ++G__34589__i;}
  args = new cljs.core.IndexedSeq(G__34589__a,0);
} 
return G__34588__delegate.call(this,args);};
G__34588.cljs$lang$maxFixedArity = 0;
G__34588.cljs$lang$applyTo = (function (arglist__34590){
var args = cljs.core.seq(arglist__34590);
return G__34588__delegate(args);
});
G__34588.cljs$core$IFn$_invoke$arity$variadic = G__34588__delegate;
return G__34588;
})()
;

return null;
});
