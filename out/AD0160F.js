goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15387__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15387 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15388__i = 0, G__15388__a = new Array(arguments.length -  0);
while (G__15388__i < G__15388__a.length) {G__15388__a[G__15388__i] = arguments[G__15388__i + 0]; ++G__15388__i;}
  args = new cljs.core.IndexedSeq(G__15388__a,0);
} 
return G__15387__delegate.call(this,args);};
G__15387.cljs$lang$maxFixedArity = 0;
G__15387.cljs$lang$applyTo = (function (arglist__15389){
var args = cljs.core.seq(arglist__15389);
return G__15387__delegate(args);
});
G__15387.cljs$core$IFn$_invoke$arity$variadic = G__15387__delegate;
return G__15387;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15390__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15390 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15391__i = 0, G__15391__a = new Array(arguments.length -  0);
while (G__15391__i < G__15391__a.length) {G__15391__a[G__15391__i] = arguments[G__15391__i + 0]; ++G__15391__i;}
  args = new cljs.core.IndexedSeq(G__15391__a,0);
} 
return G__15390__delegate.call(this,args);};
G__15390.cljs$lang$maxFixedArity = 0;
G__15390.cljs$lang$applyTo = (function (arglist__15392){
var args = cljs.core.seq(arglist__15392);
return G__15390__delegate(args);
});
G__15390.cljs$core$IFn$_invoke$arity$variadic = G__15390__delegate;
return G__15390;
})()
;

return null;
});
