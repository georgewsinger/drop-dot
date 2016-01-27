goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__77313__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__77313 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77314__i = 0, G__77314__a = new Array(arguments.length -  0);
while (G__77314__i < G__77314__a.length) {G__77314__a[G__77314__i] = arguments[G__77314__i + 0]; ++G__77314__i;}
  args = new cljs.core.IndexedSeq(G__77314__a,0);
} 
return G__77313__delegate.call(this,args);};
G__77313.cljs$lang$maxFixedArity = 0;
G__77313.cljs$lang$applyTo = (function (arglist__77315){
var args = cljs.core.seq(arglist__77315);
return G__77313__delegate(args);
});
G__77313.cljs$core$IFn$_invoke$arity$variadic = G__77313__delegate;
return G__77313;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__77316__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__77316 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77317__i = 0, G__77317__a = new Array(arguments.length -  0);
while (G__77317__i < G__77317__a.length) {G__77317__a[G__77317__i] = arguments[G__77317__i + 0]; ++G__77317__i;}
  args = new cljs.core.IndexedSeq(G__77317__a,0);
} 
return G__77316__delegate.call(this,args);};
G__77316.cljs$lang$maxFixedArity = 0;
G__77316.cljs$lang$applyTo = (function (arglist__77318){
var args = cljs.core.seq(arglist__77318);
return G__77316__delegate(args);
});
G__77316.cljs$core$IFn$_invoke$arity$variadic = G__77316__delegate;
return G__77316;
})()
;

return null;
});
