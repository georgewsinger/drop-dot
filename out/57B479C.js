goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__299619__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__299619 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__299620__i = 0, G__299620__a = new Array(arguments.length -  0);
while (G__299620__i < G__299620__a.length) {G__299620__a[G__299620__i] = arguments[G__299620__i + 0]; ++G__299620__i;}
  args = new cljs.core.IndexedSeq(G__299620__a,0);
} 
return G__299619__delegate.call(this,args);};
G__299619.cljs$lang$maxFixedArity = 0;
G__299619.cljs$lang$applyTo = (function (arglist__299621){
var args = cljs.core.seq(arglist__299621);
return G__299619__delegate(args);
});
G__299619.cljs$core$IFn$_invoke$arity$variadic = G__299619__delegate;
return G__299619;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__299622__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__299622 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__299623__i = 0, G__299623__a = new Array(arguments.length -  0);
while (G__299623__i < G__299623__a.length) {G__299623__a[G__299623__i] = arguments[G__299623__i + 0]; ++G__299623__i;}
  args = new cljs.core.IndexedSeq(G__299623__a,0);
} 
return G__299622__delegate.call(this,args);};
G__299622.cljs$lang$maxFixedArity = 0;
G__299622.cljs$lang$applyTo = (function (arglist__299624){
var args = cljs.core.seq(arglist__299624);
return G__299622__delegate(args);
});
G__299622.cljs$core$IFn$_invoke$arity$variadic = G__299622__delegate;
return G__299622;
})()
;

return null;
});
