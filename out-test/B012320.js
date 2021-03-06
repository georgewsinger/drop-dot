goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15388__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15389__i = 0, G__15389__a = new Array(arguments.length -  0);
while (G__15389__i < G__15389__a.length) {G__15389__a[G__15389__i] = arguments[G__15389__i + 0]; ++G__15389__i;}
  args = new cljs.core.IndexedSeq(G__15389__a,0);
} 
return G__15388__delegate.call(this,args);};
G__15388.cljs$lang$maxFixedArity = 0;
G__15388.cljs$lang$applyTo = (function (arglist__15390){
var args = cljs.core.seq(arglist__15390);
return G__15388__delegate(args);
});
G__15388.cljs$core$IFn$_invoke$arity$variadic = G__15388__delegate;
return G__15388;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15391__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15392__i = 0, G__15392__a = new Array(arguments.length -  0);
while (G__15392__i < G__15392__a.length) {G__15392__a[G__15392__i] = arguments[G__15392__i + 0]; ++G__15392__i;}
  args = new cljs.core.IndexedSeq(G__15392__a,0);
} 
return G__15391__delegate.call(this,args);};
G__15391.cljs$lang$maxFixedArity = 0;
G__15391.cljs$lang$applyTo = (function (arglist__15393){
var args = cljs.core.seq(arglist__15393);
return G__15391__delegate(args);
});
G__15391.cljs$core$IFn$_invoke$arity$variadic = G__15391__delegate;
return G__15391;
})()
;

return null;
});
