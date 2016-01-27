goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__341075__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__341075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__341076__i = 0, G__341076__a = new Array(arguments.length -  0);
while (G__341076__i < G__341076__a.length) {G__341076__a[G__341076__i] = arguments[G__341076__i + 0]; ++G__341076__i;}
  args = new cljs.core.IndexedSeq(G__341076__a,0);
} 
return G__341075__delegate.call(this,args);};
G__341075.cljs$lang$maxFixedArity = 0;
G__341075.cljs$lang$applyTo = (function (arglist__341077){
var args = cljs.core.seq(arglist__341077);
return G__341075__delegate(args);
});
G__341075.cljs$core$IFn$_invoke$arity$variadic = G__341075__delegate;
return G__341075;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__341078__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__341078 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__341079__i = 0, G__341079__a = new Array(arguments.length -  0);
while (G__341079__i < G__341079__a.length) {G__341079__a[G__341079__i] = arguments[G__341079__i + 0]; ++G__341079__i;}
  args = new cljs.core.IndexedSeq(G__341079__a,0);
} 
return G__341078__delegate.call(this,args);};
G__341078.cljs$lang$maxFixedArity = 0;
G__341078.cljs$lang$applyTo = (function (arglist__341080){
var args = cljs.core.seq(arglist__341080);
return G__341078__delegate(args);
});
G__341078.cljs$core$IFn$_invoke$arity$variadic = G__341078__delegate;
return G__341078;
})()
;

return null;
});
