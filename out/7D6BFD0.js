goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__340053__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__340053 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__340054__i = 0, G__340054__a = new Array(arguments.length -  0);
while (G__340054__i < G__340054__a.length) {G__340054__a[G__340054__i] = arguments[G__340054__i + 0]; ++G__340054__i;}
  args = new cljs.core.IndexedSeq(G__340054__a,0);
} 
return G__340053__delegate.call(this,args);};
G__340053.cljs$lang$maxFixedArity = 0;
G__340053.cljs$lang$applyTo = (function (arglist__340055){
var args = cljs.core.seq(arglist__340055);
return G__340053__delegate(args);
});
G__340053.cljs$core$IFn$_invoke$arity$variadic = G__340053__delegate;
return G__340053;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__340056__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__340056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__340057__i = 0, G__340057__a = new Array(arguments.length -  0);
while (G__340057__i < G__340057__a.length) {G__340057__a[G__340057__i] = arguments[G__340057__i + 0]; ++G__340057__i;}
  args = new cljs.core.IndexedSeq(G__340057__a,0);
} 
return G__340056__delegate.call(this,args);};
G__340056.cljs$lang$maxFixedArity = 0;
G__340056.cljs$lang$applyTo = (function (arglist__340058){
var args = cljs.core.seq(arglist__340058);
return G__340056__delegate(args);
});
G__340056.cljs$core$IFn$_invoke$arity$variadic = G__340056__delegate;
return G__340056;
})()
;

return null;
});
