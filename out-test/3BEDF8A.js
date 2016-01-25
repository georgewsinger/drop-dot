goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__50855__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__50855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50856__i = 0, G__50856__a = new Array(arguments.length -  0);
while (G__50856__i < G__50856__a.length) {G__50856__a[G__50856__i] = arguments[G__50856__i + 0]; ++G__50856__i;}
  args = new cljs.core.IndexedSeq(G__50856__a,0);
} 
return G__50855__delegate.call(this,args);};
G__50855.cljs$lang$maxFixedArity = 0;
G__50855.cljs$lang$applyTo = (function (arglist__50857){
var args = cljs.core.seq(arglist__50857);
return G__50855__delegate(args);
});
G__50855.cljs$core$IFn$_invoke$arity$variadic = G__50855__delegate;
return G__50855;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__50858__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__50858 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50859__i = 0, G__50859__a = new Array(arguments.length -  0);
while (G__50859__i < G__50859__a.length) {G__50859__a[G__50859__i] = arguments[G__50859__i + 0]; ++G__50859__i;}
  args = new cljs.core.IndexedSeq(G__50859__a,0);
} 
return G__50858__delegate.call(this,args);};
G__50858.cljs$lang$maxFixedArity = 0;
G__50858.cljs$lang$applyTo = (function (arglist__50860){
var args = cljs.core.seq(arglist__50860);
return G__50858__delegate(args);
});
G__50858.cljs$core$IFn$_invoke$arity$variadic = G__50858__delegate;
return G__50858;
})()
;

return null;
});
