goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31536__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31537__i = 0, G__31537__a = new Array(arguments.length -  0);
while (G__31537__i < G__31537__a.length) {G__31537__a[G__31537__i] = arguments[G__31537__i + 0]; ++G__31537__i;}
  args = new cljs.core.IndexedSeq(G__31537__a,0);
} 
return G__31536__delegate.call(this,args);};
G__31536.cljs$lang$maxFixedArity = 0;
G__31536.cljs$lang$applyTo = (function (arglist__31538){
var args = cljs.core.seq(arglist__31538);
return G__31536__delegate(args);
});
G__31536.cljs$core$IFn$_invoke$arity$variadic = G__31536__delegate;
return G__31536;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31539__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31540__i = 0, G__31540__a = new Array(arguments.length -  0);
while (G__31540__i < G__31540__a.length) {G__31540__a[G__31540__i] = arguments[G__31540__i + 0]; ++G__31540__i;}
  args = new cljs.core.IndexedSeq(G__31540__a,0);
} 
return G__31539__delegate.call(this,args);};
G__31539.cljs$lang$maxFixedArity = 0;
G__31539.cljs$lang$applyTo = (function (arglist__31541){
var args = cljs.core.seq(arglist__31541);
return G__31539__delegate(args);
});
G__31539.cljs$core$IFn$_invoke$arity$variadic = G__31539__delegate;
return G__31539;
})()
;

return null;
});
