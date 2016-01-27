goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__329887__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__329887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__329888__i = 0, G__329888__a = new Array(arguments.length -  0);
while (G__329888__i < G__329888__a.length) {G__329888__a[G__329888__i] = arguments[G__329888__i + 0]; ++G__329888__i;}
  args = new cljs.core.IndexedSeq(G__329888__a,0);
} 
return G__329887__delegate.call(this,args);};
G__329887.cljs$lang$maxFixedArity = 0;
G__329887.cljs$lang$applyTo = (function (arglist__329889){
var args = cljs.core.seq(arglist__329889);
return G__329887__delegate(args);
});
G__329887.cljs$core$IFn$_invoke$arity$variadic = G__329887__delegate;
return G__329887;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__329890__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__329890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__329891__i = 0, G__329891__a = new Array(arguments.length -  0);
while (G__329891__i < G__329891__a.length) {G__329891__a[G__329891__i] = arguments[G__329891__i + 0]; ++G__329891__i;}
  args = new cljs.core.IndexedSeq(G__329891__a,0);
} 
return G__329890__delegate.call(this,args);};
G__329890.cljs$lang$maxFixedArity = 0;
G__329890.cljs$lang$applyTo = (function (arglist__329892){
var args = cljs.core.seq(arglist__329892);
return G__329890__delegate(args);
});
G__329890.cljs$core$IFn$_invoke$arity$variadic = G__329890__delegate;
return G__329890;
})()
;

return null;
});
