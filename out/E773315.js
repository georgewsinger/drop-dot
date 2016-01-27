goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__354616__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__354616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__354617__i = 0, G__354617__a = new Array(arguments.length -  0);
while (G__354617__i < G__354617__a.length) {G__354617__a[G__354617__i] = arguments[G__354617__i + 0]; ++G__354617__i;}
  args = new cljs.core.IndexedSeq(G__354617__a,0);
} 
return G__354616__delegate.call(this,args);};
G__354616.cljs$lang$maxFixedArity = 0;
G__354616.cljs$lang$applyTo = (function (arglist__354618){
var args = cljs.core.seq(arglist__354618);
return G__354616__delegate(args);
});
G__354616.cljs$core$IFn$_invoke$arity$variadic = G__354616__delegate;
return G__354616;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__354619__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__354619 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__354620__i = 0, G__354620__a = new Array(arguments.length -  0);
while (G__354620__i < G__354620__a.length) {G__354620__a[G__354620__i] = arguments[G__354620__i + 0]; ++G__354620__i;}
  args = new cljs.core.IndexedSeq(G__354620__a,0);
} 
return G__354619__delegate.call(this,args);};
G__354619.cljs$lang$maxFixedArity = 0;
G__354619.cljs$lang$applyTo = (function (arglist__354621){
var args = cljs.core.seq(arglist__354621);
return G__354619__delegate(args);
});
G__354619.cljs$core$IFn$_invoke$arity$variadic = G__354619__delegate;
return G__354619;
})()
;

return null;
});
